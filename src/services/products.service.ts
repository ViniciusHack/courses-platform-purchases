import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async listAllProducts() {
    return await this.prisma.product.findMany();
  }

  async createProduct({ title }: CreateProductParams) {
    const slug = slugify(title);

    const productWithSameSlug = await this.prisma.product.findUnique({
      where: { slug },
    });

    if (productWithSameSlug) {
      throw new Error(`Another product with same slug already exists`);
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }
}
