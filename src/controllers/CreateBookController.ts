import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const CreateBookController = async (req: Request, res: Response) => {
  const { titulo, autor, anoPublicacao, genero } = req.body;

  try {
    const novoLivro = await prisma.livro.create({
      data: { titulo, autor, anoPublicacao, genero },
    });
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar o livro.' });
  }
};
