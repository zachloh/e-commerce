export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string | null;
      placeholder: string;
      width: number;
      height: number;
      formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type Category = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type Type = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type Brand = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    brand: {
      data: Brand;
    };
    price: number;
    isNew: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    feature: 'featured' | 'trending' | 'normal';
    image1: Image;
    image2: Image;
    category: {
      data: Category;
    };
    type: {
      data: Type;
    };
    sizes: string[];
    recommended: string[];
  };
};

export type StrapiResponse<T> = {
  data: T;
  meta: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};
