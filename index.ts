import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/userlanguages", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.get("/userlanguages/:language", async (req, res) => {
  try {
    const usersByLanguage = await prisma.user.findMany({
      where: {
        languages: {
          has: req.params.language,
        },
      },
    });
    res.json(usersByLanguage);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.post("/userlanguages", async (req, res) => {
  try {
    const { name, email, age, languages } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        languages,
        age,
      },
    });
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.put("/userlanguages/:email", async (req, res) => {
  try {
    const { name, email, age, languages } = req.body;
    const updatedUsers = await prisma.user.update({
      where: {
        email: req.params.email,
      },
      data: {
        languages,
      },
    });
    res.json(updatedUsers);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.delete("/userlanguages", async (req, res) => {
  try {
    const deletedUsers = await prisma.user.deleteMany({
      where: {
        age: {
          lt: 18,
        },
      },
    });
    res.json(deletedUsers);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
