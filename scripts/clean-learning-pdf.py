"""Remove literal formatting tags from the user-supplied SSA101 study PDF.

The supplied PDF contains selectable text only. Its visible <b> tags are a
rendering error, so this script redraws the same lines in their original page
positions with actual bold text while leaving the source file untouched.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

import pdfplumber
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


def main(source: Path, output: Path) -> None:
    pdfmetrics.registerFont(TTFont("StudyArial", r"C:\Windows\Fonts\arial.ttf"))
    pdfmetrics.registerFont(TTFont("StudyArialBold", r"C:\Windows\Fonts\arialbd.ttf"))
    output.parent.mkdir(parents=True, exist_ok=True)

    with pdfplumber.open(source) as document:
        drawing = canvas.Canvas(str(output), pagesize=(document.pages[0].width, document.pages[0].height))
        drawing.setTitle("Learning to Learn Online - Bản dịch tiếng Việt để học và ôn Quiz")
        drawing.setAuthor("Tài liệu do người học cung cấp; bản trình bày được sửa lỗi thẻ định dạng")
        for page in document.pages:
            drawing.setPageSize((page.width, page.height))
            for line in page.extract_text_lines():
                if not line["chars"]:
                    continue
                first = line["chars"][0]
                size = first["size"]
                original_bold = "Bold" in first["fontname"]
                drawing.setFillColor(HexColor("#1d1d1d"))
                text = drawing.beginText(line["x0"], page.height - line["top"] - size * 0.88)
                bold = original_bold
                for part in re.split(r"(</?b>)", line["text"]):
                    if part == "<b>":
                        bold = True
                    elif part == "</b>":
                        bold = original_bold
                    elif part:
                        text.setFont("StudyArialBold" if bold else "StudyArial", size)
                        text.textOut(part)
                drawing.drawText(text)
            drawing.showPage()
        drawing.save()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: clean-learning-pdf.py input.pdf output.pdf")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
