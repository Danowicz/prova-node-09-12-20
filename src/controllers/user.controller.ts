import { Request, Response } from "express";
import * as db from "../db";

export let _get = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (id) {
        const index = findIndexByID(id);
        if (index !== -1) {
            res.send(db.users[index]);
        } else {
            res.status(404).end('Usuário não encontrado.');
        }
    } else {
        res.send(db.users);
    }
};

export let _post = (req: Request, res: Response, next) => {
    let body: string = '';
    req.on('data', chunk => {
        body += chunk.toString();
    }).on('end', () => {
        try {
            db.createUser(JSON.parse(body));
            res.end('Usuário criado com sucesso.');
        } catch (error) {
            res.status(400).send(error.toString());
        }
    })
};

export let _put = (req: Request, res: Response, next) => {
    let body: string = '';
    req.on('data', chunk => {
        body += chunk.toString();
    }).on('end', () => {
        const id = Number(req.params.id);
        if (id) {
            const index = findIndexByID(id);
            if (index !== -1) {
                try {
                    db.updateUser(index, JSON.parse(body));
                    res.end('Usuário alterado.');
                } catch (error) {
                    res.status(400).send(error.toString())
                }
            } else {
                res.status(404).end('Usuário não encontrado.');
            }
        } else {
            res.status(400).end('Insira um id.')
        }
    })
};

export let _delete = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    if (id) {
        const index = findIndexByID(id);
        if (index !== -1) {
            db.deleteUser(index);
            res.end('Usuário removido.');
        } else {
            res.status(404).end('Usuário não encontrado.');
        }
    } else {
        res.status(400).end('Insira um id.');
    }
};

function findIndexByID(userID: number) {
    return db.users.findIndex(({id}) => id === userID);
}
