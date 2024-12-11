import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const BookListController = async (req: Request,res: Response) => {
    try {
      const livros = await prisma.livro.findMany();
      res.json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os livros.' });
    }
  };
  