from fastapi import FastAPI
from api_marvel import GetMarvel
import uvicorn


app = FastAPI()  # ligando o FastAPI

api_marvel = GetMarvel()  # atribuindo a classe a uma variavel, nesta classe estão as chamadas para a API

#adicionando CORS
from fastapi.middleware.cors import CORSMiddleware

origins = ['http://localhost:3000']

app.add_middleware(CORSMiddleware,
                   allow_origins = origins,
                   allow_credentials = True,
                   allow_methods = ["*"],
                   allow_headers = ["*"])  # adicionando o origins ao CORS para a aplicação não ser barrada
@app.get('/')
def index(offset: int = 0):  # rota principal com todos os personagens
    personagens = api_marvel.personagens(offset=offset) #
    result = []
    # pegando somente as informações que me interessam para levar para o front e acelerar o processo
    for personagem in personagens:
        item = {}
        item["id"] = personagem['id']
        item["name"] = personagem['name']
        item["description"] = personagem['description']
        item['image'] = personagem["thumbnail"]['path'] + "/standard_fantastic." + personagem["thumbnail"]['extension']
        result.append(item)

    return result

@app.get('/unic')
def index(nome: str): # rota secundaria para personagem unico
    id = nome
    personagem,quadrinhos= api_marvel.correspondente(id)
    result = {}
    item = {}
    # pegando somente as informações que me interessam para levar para o front e acelerar o processo
    item["id"] = personagem['id']
    item["name"] = personagem['name']
    item["description"] = personagem['description']
    item['image'] = personagem["thumbnail"]
    result['personagem'] = item
    result['comics'] = quadrinhos
    return result

# debug da aplicação local
if __name__ == "__main__":
    uvicorn.run(app,host ="0.0.0.0", port = 8000)