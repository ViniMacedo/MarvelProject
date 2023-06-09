from marvel import Marvel
from random import randrange


PB_KEY = "b3d497d6f0936552354f17e34eb5a3e2"
PV_KEY = "a40f9440485b427c41e91e2429e89eecf1ef0261"

# criando a classe que realizará o consumo da api, para isso as chaves publica e privadas foram definidas acima.
class GetMarvel:

    def __init__(self):
        self.api = Marvel(PUBLIC_KEY= PB_KEY,PRIVATE_KEY= PV_KEY)
    def personagens(self,offset):
        if offset != 0:
            personagens = self.api.characters.all(limit=100,offset=(offset-1)*100)['data']['results']  # passando o limit de 100 para não ter muitas páginas no front
        else:
            personagens = self.api.characters.all(limit = 100)['data']['results']
        return personagens

    def correspondente(self, id):
        personagem = self.api.characters.all(nameStartsWith=id[randrange(0,len(id))])['data']['results']  # pegando aleatoriamente um personagem de acordo com uma das letras do nome da pessoa
        personagem = personagem[randrange(0,len(personagem))]
        id = personagem['id']
        comics = self.api.characters.comics(identifier=id)['data']['results']

        return personagem,comics
