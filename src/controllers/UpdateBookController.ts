import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const UpdateBookController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { titulo, autor, anoPublicacao, genero } = req.body;

  if (!id || isNaN(Number(id))) {
    res.status(400).json({ error: 'ID inválido ou não fornecido.' });
    return;
  }

  try {
    const livroAtualizado = await prisma.livro.update({
      where: { id: Number(id) },
      data: { titulo, autor, anoPublicacao, genero },
    });
    res.json(livroAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o livro.' });
  }
};
