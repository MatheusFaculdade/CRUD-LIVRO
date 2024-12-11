import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const DeleteBookController = async (req: Request, res: Response): Promise<void>  => {
  const { id } = req.params;
  
  if (!id || isNaN(Number(id))) {
    res.status(400).json({ error: 'ID inválido ou não fornecido.' });
    return;
  }
    try {
      await prisma.livro.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o livro.' });
    }
  };
  