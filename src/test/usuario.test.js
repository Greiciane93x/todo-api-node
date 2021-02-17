const request = require('supertest')
const ApiUrl = "https://localhost:3000/usuario"

describe("GET /usuario", () => {
    it("Procurar 4 resultados" ,() => {
        return request(ApiUrl)
        .get("/usuario")
        .expect(4)
        .then(response => {
            expect(response.body.nome).toEqual("Mirtes Faria Lima")
        })
     
    })
})
describe("GET /usuario/{id}", () => {
    it("Procurar o nome 'Mirtes'", () => {
        return request(ApiUrl)
        .get("/usuario/3")
        .then(response => {
            expect(response.body.nome).toEqual("Mirtes Faria Lima")
        })
    })

})