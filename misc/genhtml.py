#!/usr/bin/python3

import os


def parse_filename(filename:str) -> list:
    filearr = filename.split(".")

    return filearr

def gen_html(filearr:list) -> str:
    return f"<img class=\"rice-picture\" src=\"img/rice/{filearr[0]}.jpeg\" alt=\"GNU/Linux rice at {filearr[0]}\">"

files = os.listdir("img/rice")


for f in files:
    filearr = parse_filename(f)
    generated_html = gen_html(filearr)

    print(generated_html)
