"use client";
import { Bookmark,ShoppingBag } from "lucide-react";

// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


type CardProps = React.ComponentProps<typeof Card>;

export default function Product({ className, ...props }: CardProps) {
  const [data, setData] = useState([]);

  const getProduct = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    // setData(data.data);
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="m-8 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      {data.map((product: any) => (
        <Card
          key={product.id}
          //   className={cn("w-[380px]", className)}
          className="rounded-lg bg-black"
          {...props}
        >
          <CardHeader className="bg-white">
          <CardDescription className="relative bg-white">
              <Bookmark className="absolute top-0 right-0 m-2 bg-white p-1 rounded text-xl" />
              <Image
                className="h-96"
                src={product.image}
                width={400}
                height={300}
                alt={product.title}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 bg-black text-white">
            <h5 className="text-xl font-bold tracking-tight mt-4">
              {product.title}
            </h5>

            <div className="flex justify-between">
              <div className="font-bold text-lg">₹{product.price}</div>
              <div> <ShoppingBag /> </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
