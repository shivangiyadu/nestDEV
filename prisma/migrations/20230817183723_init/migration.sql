-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "password" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "author_id" INTEGER,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "book_name" TEXT NOT NULL,
    "book_description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user1" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "ph_no" INTEGER NOT NULL,

    CONSTRAINT "user1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "house_no" INTEGER NOT NULL,
    "lane_no" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "pincode" INTEGER,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_details" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_ph_no" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_house_no" INTEGER NOT NULL,
    "user_city" TEXT NOT NULL,
    "user_pincode" INTEGER,
    "price" INTEGER NOT NULL,
    "no_items" INTEGER,
    "discount" INTEGER,
    "order_date" INTEGER NOT NULL,
    "order_time" INTEGER NOT NULL,

    CONSTRAINT "customer_details_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "auth_user" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "hashedRT" TEXT,

    CONSTRAINT "auth_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "ph_no" TEXT,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_title_author_id_key" ON "post"("title", "author_id");

-- CreateIndex
CREATE UNIQUE INDEX "user1_email_key" ON "user1"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_details_user_id_key" ON "customer_details"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_email_key" ON "auth_user"("email");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
