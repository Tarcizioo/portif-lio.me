from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"

NAVY = colors.HexColor("#0B1220")
BLUE = colors.HexColor("#0B72B9")
SLATE = colors.HexColor("#475569")
LIGHT = colors.HexColor("#D9E2EC")


RESUMES = {
    "pt": {
        "file": "resume-pt.pdf",
        "title": "Desenvolvedor Frontend | React, TypeScript, GraphQL e Firebase",
        "summary": (
            "Estudante de Engenharia da Computação e desenvolvedor frontend com experiência "
            "na criação de produtos web completos. Atuo com React, TypeScript, Firebase, "
            "GraphQL, testes automatizados e automações com Google Apps Script."
        ),
        "section": {
            "summary": "RESUMO PROFISSIONAL",
            "experience": "EXPERIÊNCIA PROFISSIONAL",
            "projects": "PROJETOS EM DESTAQUE",
            "skills": "COMPETÊNCIAS TÉCNICAS",
            "education": "FORMAÇÃO, CERTIFICAÇÃO E IDIOMAS",
        },
        "experience": [
            {
                "role": "Estagiário ChemFeed",
                "company": "Veolia | ChemFeed",
                "date": "Mar/2026 - Atual",
                "location": "Sorocaba/SP - Presencial",
                "bullets": [
                    "Apoio a demandas técnicas, administrativas e de tecnologia da equipe ChemFeed.",
                    "Criação de documentação e fluxogramas; acompanhamento de manutenções, cotações, fornecedores e testes de materiais.",
                    "Desenvolvimento de aplicações web internas e automações com Google Apps Script, JavaScript, HTML e CSS.",
                ],
            },
            {
                "role": "Estagiário - Laboratório de Elétrica",
                "company": "Centro Universitário Facens",
                "date": "Ago/2024 - Mar/2026",
                "location": "Sorocaba/SP",
                "bullets": [
                    "Suporte técnico em atividades práticas de elétrica e física para professores e estudantes.",
                    "Gestão de materiais em Excel e padronização de guias e documentação interna.",
                ],
            },
            {
                "role": "Operador de Telemarketing",
                "company": "Instituto Cultural Newton Paiva Ferreira",
                "date": "Abr/2023 - Set/2023",
                "location": "Belo Horizonte/MG",
                "bullets": [
                    "Atendimento de 40 a 50 chamadas por dia e gestão de leads com CRM e Excel.",
                ],
            },
        ],
        "projects": [
            {
                "name": "Portal Animes V2",
                "meta": "React 19 | GraphQL | Firebase | PWA",
                "link": "https://portal-animes-v2.vercel.app/",
                "bullets": [
                    "Plataforma social com catálogo, biblioteca, estatísticas, perfis, comentários, notificações e recursos de acessibilidade.",
                    "Cache persistente, rotas lazy e pipeline GitHub Actions com lint, build e 47 testes automatizados.",
                ],
            },
            {
                "name": "Voxel Terrain Engine",
                "meta": "JavaScript | Three.js | WebGL",
                "bullets": [
                    "Engine 3D com terreno procedural, InstancedMesh, física básica, raycasting e controles em primeira pessoa.",
                ],
            },
        ],
        "skills": [
            "<b>Frontend:</b> TypeScript, JavaScript, React, Next.js, React Router, Tailwind CSS.",
            "<b>Dados e backend:</b> Firebase Auth, Cloud Firestore, GraphQL, APIs REST, TanStack Query e SQL.",
            "<b>Automação, qualidade e ferramentas:</b> Google Apps Script, Google Workspace, Vitest, Testing Library, GitHub Actions, Git, GitHub, Figma, Three.js e WebGL.",
        ],
        "education": [
            "<b>Engenharia da Computação</b> - Centro Universitário Facens | Fev/2024 - Nov/2028 (previsão)",
            "<b>Certificação:</b> Scrum Fundamentals Certified (SFC) - SCRUMstudy | Nov/2025",
            "<b>Idiomas:</b> Português nativo | Inglês intermediário | Espanhol básico",
        ],
    },
    "en": {
        "file": "resume-en.pdf",
        "title": "Frontend Developer | React, TypeScript, GraphQL, and Firebase",
        "summary": (
            "Computer Engineering student and frontend developer experienced in building "
            "complete web products. I work with React, TypeScript, Firebase, GraphQL, "
            "automated testing, and Google Apps Script automation."
        ),
        "section": {
            "summary": "PROFESSIONAL SUMMARY",
            "experience": "WORK EXPERIENCE",
            "projects": "SELECTED PROJECTS",
            "skills": "TECHNICAL SKILLS",
            "education": "EDUCATION, CERTIFICATION, AND LANGUAGES",
        },
        "experience": [
            {
                "role": "ChemFeed Intern",
                "company": "Veolia | ChemFeed",
                "date": "Mar/2026 - Present",
                "location": "Sorocaba/SP - On-site",
                "bullets": [
                    "Support technical, administrative, and technology initiatives for the ChemFeed team.",
                    "Create documentation and flowcharts; track maintenance, quotations, suppliers, and material tests.",
                    "Build internal web applications and automations with Google Apps Script, JavaScript, HTML, and CSS.",
                ],
            },
            {
                "role": "Electrical Laboratory Intern",
                "company": "Centro Universitário Facens",
                "date": "Aug/2024 - Mar/2026",
                "location": "Sorocaba/SP",
                "bullets": [
                    "Provided technical support for practical electrical and physics activities.",
                    "Managed materials in Excel and standardized experiment guides and internal documentation.",
                ],
            },
            {
                "role": "Telemarketing Operator",
                "company": "Instituto Cultural Newton Paiva Ferreira",
                "date": "Apr/2023 - Sep/2023",
                "location": "Belo Horizonte/MG",
                "bullets": [
                    "Handled 40-50 calls per day and managed leads with CRM and Excel.",
                ],
            },
        ],
        "projects": [
            {
                "name": "Portal Animes V2",
                "meta": "React 19 | GraphQL | Firebase | PWA",
                "link": "https://portal-animes-v2.vercel.app/",
                "bullets": [
                    "Social platform with catalog, library, statistics, profiles, comments, notifications, and accessible interactions.",
                    "Persistent cache, lazy-loaded routes, and a GitHub Actions pipeline with lint, build, and 47 automated tests.",
                ],
            },
            {
                "name": "Voxel Terrain Engine",
                "meta": "JavaScript | Three.js | WebGL",
                "bullets": [
                    "3D engine with procedural terrain, InstancedMesh, basic physics, raycasting, and first-person controls.",
                ],
            },
        ],
        "skills": [
            "<b>Frontend:</b> TypeScript, JavaScript, React, Next.js, React Router, and Tailwind CSS.",
            "<b>Data and backend:</b> Firebase Auth, Cloud Firestore, GraphQL, REST APIs, TanStack Query, and SQL.",
            "<b>Automation, quality, and tools:</b> Google Apps Script, Google Workspace, Vitest, Testing Library, GitHub Actions, Git, GitHub, Figma, Three.js, and WebGL.",
        ],
        "education": [
            "<b>Computer Engineering</b> - Centro Universitário Facens | Feb/2024 - Nov/2028 (expected)",
            "<b>Certification:</b> Scrum Fundamentals Certified (SFC) - SCRUMstudy | Nov/2025",
            "<b>Languages:</b> Portuguese native | English intermediate | Spanish basic",
        ],
    },
}


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=20,
            leading=22, textColor=NAVY, alignment=TA_CENTER, spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9.4,
            leading=11, textColor=BLUE, alignment=TA_CENTER, spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.8,
            leading=9.5, textColor=SLATE, alignment=TA_CENTER, spaceAfter=5,
        ),
        "section": ParagraphStyle(
            "Section", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9.2,
            leading=10.5, textColor=BLUE, spaceBefore=4, spaceAfter=2.5,
        ),
        "body": ParagraphStyle(
            "Body", parent=base["Normal"], fontName="Helvetica", fontSize=8.2,
            leading=10.2, textColor=NAVY, alignment=TA_LEFT, spaceAfter=1.5,
        ),
        "entry": ParagraphStyle(
            "Entry", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.7,
            leading=10.2, textColor=NAVY,
        ),
        "meta": ParagraphStyle(
            "Meta", parent=base["Normal"], fontName="Helvetica", fontSize=7.6,
            leading=9.2, textColor=SLATE, alignment=TA_LEFT,
        ),
        "date": ParagraphStyle(
            "Date", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.6,
            leading=9.2, textColor=SLATE, alignment=TA_LEFT,
        ),
        "bullet": ParagraphStyle(
            "Bullet", parent=base["Normal"], fontName="Helvetica", fontSize=7.9,
            leading=9.7, leftIndent=7, firstLineIndent=-7, textColor=NAVY, spaceAfter=1,
        ),
    }


def section_title(label, style):
    return KeepTogether([
        Paragraph(label, style),
        HRFlowable(width="100%", thickness=0.55, color=LIGHT, spaceBefore=0, spaceAfter=2),
    ])


def role_block(item, st):
    header = Table(
        [[Paragraph(f"<b>{item['role']}</b> | {item['company']}", st["entry"]),
          Paragraph(item["date"], st["date"])]],
        colWidths=[142 * mm, 35 * mm],
        hAlign="LEFT",
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    content = [header, Paragraph(item["location"], st["meta"])]
    content.extend(Paragraph(f"- {bullet}", st["bullet"]) for bullet in item["bullets"])
    content.append(Spacer(1, 1.5))
    return KeepTogether(content)


def project_block(item, st):
    content = [
        Paragraph(f"<b>{item['name']}</b> | {item['meta']}", st["entry"]),
    ]
    if link := item.get("link"):
        display_link = link.replace("https://", "", 1).rstrip("/")
        content.append(Paragraph(f'<link href="{link}" color="#0B72B9">{display_link}</link>', st["meta"]))
    content.extend(Paragraph(f"- {bullet}", st["bullet"]) for bullet in item["bullets"])
    content.append(Spacer(1, 1.5))
    return KeepTogether(content)


def build_resume(lang, data):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    target = OUTPUT_DIR / data["file"]
    st = styles()
    doc = SimpleDocTemplate(
        str(target),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=11 * mm,
        bottomMargin=10 * mm,
        title=f"Tarcizio Pereira Neto - {data['title']}",
        author="Tarcizio Pereira Neto",
        subject="Professional resume",
    )

    contacts = (
        '<link href="mailto:tarcizioneto10@gmail.com" color="#0B72B9">tarcizioneto10@gmail.com</link>'
        ' | <link href="tel:+5548999299213" color="#0B72B9">(48) 9 9929-9213</link>'
        ' | <link href="https://portif-liome.vercel.app" color="#0B72B9">portif-liome.vercel.app</link>'
        ' | <link href="https://www.linkedin.com/in/tarcizio-pereira-neto-135299279" color="#0B72B9">LinkedIn</link>'
        ' | <link href="https://github.com/Tarcizioo" color="#0B72B9">GitHub</link>'
        ' | Sorocaba/SP'
    )

    story = [
        Paragraph("Tarcizio Pereira Neto", st["name"]),
        Paragraph(data["title"], st["headline"]),
        Paragraph(contacts, st["contact"]),
        section_title(data["section"]["summary"], st["section"]),
        Paragraph(data["summary"], st["body"]),
        section_title(data["section"]["experience"], st["section"]),
    ]
    story.extend(role_block(item, st) for item in data["experience"])
    story.append(section_title(data["section"]["projects"], st["section"]))
    story.extend(project_block(item, st) for item in data["projects"])
    story.append(section_title(data["section"]["skills"], st["section"]))
    story.extend(Paragraph(line, st["body"]) for line in data["skills"])
    story.append(section_title(data["section"]["education"], st["section"]))
    story.extend(Paragraph(line, st["body"]) for line in data["education"])

    doc.build(story)
    shutil.copyfile(target, PUBLIC_DIR / data["file"])
    return target


if __name__ == "__main__":
    generated = [build_resume(lang, data) for lang, data in RESUMES.items()]
    for path in generated:
        print(path)
