#!/usr/bin/env python3

# Python 3.9.5

# write_html_code_to_file.py

# Dependencies
import os
import requests

path = '/home/user/...'             # Enter path for document storage here
os.chdir(path)                      # Change current working directory for write operation later

url = 'https://www.domain.com'      # Enter domain here

response = requests.get(url)        # Response should be 200 (OK)
html = response.text                # Complete source code as string

# Write the whole document to a txt-file:
with open('source_code.txt', 'wt') as outfile:
  outfile.write(html)
outfile.close()
