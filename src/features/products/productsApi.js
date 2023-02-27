import instance from "../../services/axios.config";

export const fetchProduct=async()=>{
    const data=await instance.get("/products");
    return data;
};

export const postProducts=async(product)=>{
    const res=await instance.post("/products",product);

};

export const deleteProducts=async(id)=>{
    const res=await instance.delete(`/products/${id}`)
}
