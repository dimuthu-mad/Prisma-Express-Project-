import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Dimuthu Maduranga",
        email: "dimuthu.maduranga@example.com",
        languages: ["English"],
        age: 25,
      },
      {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        languages: ["English", "Swedish"],
        age: 30,
      },
      {
        name: "Carlos Diaz",
        email: "carlos.diaz@example.com",
        languages: ["Spanish", "English"],
        age: 22,
      },
      {
        name: "Diana Lee",
        email: "diana.lee@example.com",
        languages: ["English", "Chinese"],
        age: 28,
      },
      {
        name: "Erik Svensson",
        email: "erik.svensson@example.com",
        languages: ["Swedish"],
        age: 35,
      },
      {
        name: "Fatima Khan",
        email: "fatima.khan@example.com",
        languages: ["Urdu", "English"],
        age: 19,
      },
      {
        name: "George Brown",
        email: "george.brown@example.com",
        languages: ["English"],
        age: 17,
      },
      {
        name: "Hanna Muller",
        email: "hanna.muller@example.com",
        languages: ["German", "English"],
        age: 27,
      },
      {
        name: "Ivan Petrov",
        email: "ivan.petrov@example.com",
        languages: ["Russian"],
        age: 40,
      },
      {
        name: "Julia Silva",
        email: "julia.silva@example.com",
        languages: ["Portuguese", "English"],
        age: 24,
      },
      {
        name: "Kamal Perera",
        email: "kamal.perera@example.com",
        languages: ["Sinhala", "English"],
        age: 32,
      },
      {
        name: "Lina Ahmed",
        email: "lina.ahmed@example.com",
        languages: ["Arabic", "English"],
        age: 21,
      },
      {
        name: "Mark Wilson",
        email: "mark.wilson@example.com",
        languages: ["English"],
        age: 29,
      },
      {
        name: "Nina Rossi",
        email: "nina.rossi@example.com",
        languages: ["Italian", "English"],
        age: 26,
      },
      {
        name: "Omar Hassan",
        email: "omar.hassan@example.com",
        languages: ["Arabic"],
        age: 16,
      },
      {
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        languages: ["Hindi", "English"],
        age: 23,
      },
      {
        name: "Quang Nguyen",
        email: "quang.nguyen@example.com",
        languages: ["Vietnamese", "English"],
        age: 31,
      },
      {
        name: "Rosa Martinez",
        email: "rosa.martinez@example.com",
        languages: ["Spanish"],
        age: 18,
      },
      {
        name: "Samir Ali",
        email: "samir.ali@example.com",
        languages: ["Arabic", "French"],
        age: 34,
      },
      {
        name: "Tina Andersson",
        email: "tina.andersson@example.com",
        languages: ["Swedish", "English"],
        age: 20,
      },
    ],
  });
}

seed().then(() => prisma.$disconnect);
