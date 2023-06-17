import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

// route for testing
router.get("/", async (_: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

// route for Create a Bank
router.post("/banks", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const {
    name,
    contactNumber,
    email,
    website,
  }: {
    name: string;
    contactNumber: string | null;
    email: string | null;
    website: string | null;
  } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const bank = await prisma.bank.create({
      data: {
        name,
        contactNumber,
        email,
        website,
      },
    });
    res.json(bank);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Get all Banks
router.get("/banks", async (_: Request, res: Response) => {
  const prisma = new PrismaClient();
  try {
    const banks = await prisma.bank.findMany();
    res.json(banks);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Get a Bank
router.get("/banks/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  try {
    const bank = await prisma.bank.findUnique({
      where: {
        id: id,
      },
    });
    if (!bank) {
      return res.status(404).json({ error: "Bank not found" });
    }
    res.json(bank);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Update a Bank
router.put("/banks/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  const {
    name,
    contactNumber,
    email,
    website,
  }: {
    name: string;
    contactNumber: string | null;
    email: string | null;
    website: string | null;
  } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const bank = await prisma.bank.update({
      where: {
        id: id,
      },
      data: {
        name,
        contactNumber,
        email,
        website,
      },
    });
    res.json(bank);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Delete a Bank
router.delete("/banks/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  try {
    const bank = await prisma.bank.delete({
      where: {
        id: id,
      },
    });
    res.json(bank);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Create a Branch
router.post("/banks/:bankId/branches", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { bankId } = req.params;
  const {
    name,
    location,
    contactNumber,
    email,
    website,
  }: {
    name: string;
    location: string;
    contactNumber: string | null;
    email: string | null;
    website: string | null;
  } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }
  try {
    const branch = await prisma.branch.create({
      data: {
        name,
        location,
        contactNumber,
        email,
        website,
        bankId,
      },
    });
    res.json(branch);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Get all Branches of a Bank
router.get("/banks/:bankId/branches", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { bankId } = req.params;
  try {
    const branches = await prisma.branch.findMany({
      where: {
        bankId: bankId,
      },
    });
    res.json(branches);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Get a Branch of a Bank
router.get("/branches/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  try {
    const branch = await prisma.branch.findUnique({
      where: {
        id: id,
      },
    });
    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }
    res.json(branch);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Update a Branch of a Bank
router.put("/branches/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  const {
    name,
    location,
    contactNumber,
    email,
    website,
  }: {
    name: string;
    location: string;
    contactNumber: string | null;
    email: string | null;
    website: string | null;
  } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }
  try {
    const branch = await prisma.branch.update({
      where: {
        id: id,
      },
      data: {
        name,
        location,
        contactNumber,
        email,
        website,
      },
    });
    res.json(branch);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

// route for Delete a Branch of a Bank
router.delete("/branches/:id", async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { id } = req.params;
  try {
    const branch = await prisma.branch.delete({
      where: {
        id: id,
      },
    });
    res.json(branch);
  } catch (error: unknown) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
});

export default router;
