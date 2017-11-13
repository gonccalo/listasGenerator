import cherrypy
import random
import os
import io
from PIL import Image, ImageFont, ImageDraw

class Pessoa(object):
    def __init__(self):
        self.lista = Lista()

    def _cp_dispatch(self, vpath):
        #print(cherrypy.request.base)
        if len(vpath) == 1:
            cherrypy.request.params['name'] = vpath.pop()
            return self.lista
        return vpath

class Lista(object):
    slogans = ["Ser UA", "Uma Academia", "Academia em pratica", "Orgulhosamente Academia", "Um Rumo Melhor", "Mudança Consciente", "Navegar Além", "Academia grande, outra vez", "Cooperar para aprender", "Está na hora!", "Voz do estudante", "Querer Mais", "Mais por ti", "Abraçar Aveiro", "Ser Aveiro"]
    posicoes = ["", ""]
    posicoes = ["Coordenador", "Responsável Finaceiro", "Vogal de Pedagogia", "Vogal de Cultura", "Vogal de Desporto", "Vogal de Comunicação", "Presidente de Mesa", "1º Secretário", "2º Secretário"]
    @cherrypy.expose
    def index(self, name):
        descricao = random.choice(self.slogans)
        nome_lista = "Lista " + descricao[0]
        pos = random.choice(self.posicoes)
        img_path = self.get_image(nome_lista, descricao, name)
        html_s = '<!DOCTYPE html><html lang="en"><head>\
            <meta charset="utf-8">\
            <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />\
            <meta property="og:type" content="article" />\
            <meta property="og:title" content="' + nome_lista + '" />\
            <meta property="og:description" content=" És o ' + pos + '" />\
            <meta property="og:image" content="' + cherrypy.request.base + '/' + img_path + '" />\
        </head><body>\
            <img src="' + cherrypy.request.base + '/' + img_path + '"></body></html>'
        return html_s
    def get_image(self, nome_lista, descricao, nome):
        imgs = os.listdir("img")
        img_name = random.choice(imgs)
        im = Image.open(img_name)
        im = im.convert("RGBA")

        #color filter
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        col = Image.new('RGBA', im.size, (r,g,b,128))
        im = Image.alpha_composite(im, col)

        #text box
        text_box_w = int(im.size[0] * 0.7)
        text_box_h = int(im.size[1] * 0.32)
        txt = Image.new('RGBA', (text_box_w, text_box_h), (255,255,255,169))
        font = ImageFont.truetype("FreeMono.ttf", size=40)
        d = ImageDraw.Draw(txt)
        text_size = d.textsize(nome_lista + '\n' + descricao, font)
        text_start_w = int((text_box_w - text_size[0]) / 2)
        text_start_h = int((text_box_h - text_size[1]) / 2)
        d.multiline_text((text_start_w, text_start_h), nome_lista + '\n' + descricao, font=font, spacing=4, align='center' , fill=(0,0,0,255))
        w = int((im.size[0] - text_box_w) / 2)
        h = int((im.size[1] - text_box_h) / 2)
        im.alpha_composite(txt, (w, h))
        im.save("res/" + nome + ".png")
        return "res/" + nome + ".png"


if __name__ == '__main__':
    cherrypy.quickstart(Pessoa(),'/',"app.conf")