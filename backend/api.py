from fastapi import FastAPI
from api_marvel import GetMarvel
import uvicorn


app = FastAPI()

api_marvel = GetMarvel()

#adicionando CORS
from fastapi.middleware.cors import CORSMiddleware

origins = ['http://localhost:3000']

app.add_middleware(CORSMiddleware,
                   allow_origins = origins,
                   allow_credentials = True,
                   allow_methods = ["*"],
                   allow_headers = ["*"])
@app.get('/')
def index(offset: int = 0):
    personagens = api_marvel.personagens(offset=offset)
    result = []
    for personagem in personagens:
        item = {}
        item["id"] = personagem['id']
        item["name"] = personagem['name']
        item["description"] = personagem['description']
        item['image'] = personagem["thumbnail"]['path'] + "/standard_fantastic." + personagem["thumbnail"]['extension']
        result.append(item)

    return result

@app.get('/unic')
def index(nome: str):
    id = nome
    personagem,quadrinhos= api_marvel.correspondente(id)
    result = {}
    item = {}
    item["id"] = personagem['id']
    item["name"] = personagem['name']
    item["description"] = personagem['description']
    item['image'] = personagem["thumbnail"]
    result['personagem'] = item
    result['comics'] = quadrinhos
    return result


if __name__ == "__main__":
    uvicorn.run(app,host ="0.0.0.0", port = 8000)