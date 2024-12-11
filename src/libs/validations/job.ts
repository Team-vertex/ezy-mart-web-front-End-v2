import { array, number, object, string, z } from "zod";

export const jobCreateStep1 = object({
    category: string().min(1, { message: "Category is required" }),
    subCategories: array(string()).min(1, { message: "At least one subcategory is required" }),
});

export const jobCreateStep2 = object({
    title: string().min(1, { message: "Title is required" }),
    description: string().min(1, { message: "Description is required" }),
    amount: number().min(1, { message: "Amount must be a positive number" }),
    dateType: z.enum(["I'm Flexible", "Today", "Tomorrow", "Specific Date"], { message: "DateType must be 'I'm Flexible', 'Today', 'Tomorrow', or 'Specific Date'"}),
    date: z.date().nullable(),
    time: z.enum(["Morning", "Evening", "Anytime"], { message: "Time must be 'Morning', 'Evening', or 'Anytime'" }),
    images: z.array(z.instanceof(File)).optional().nullable()
});

export const jobCreateStep3 = object({
    selectLocation: string().min(1, { message: "Location is required" }),
});

export const locationSchema = object({
    street_Address: string().min(1, { message: "Street address is required" }),
    suburb: string().min(1, { message: "Suburb is required" }),
    state: string().min(1, { message: "State is required" }),
    postalCode: string().min(1, { message: "Postal code is required" }),
});


export const editJob = object({
    title: string().min(1, { message: "Title is required" }),
    description: string().min(1, { message: "Description is required" }),
    category: string().min(1, { message: "Category is required" }),
    subCategories: array(string()).min(1, { message: "At least one subcategory is required" }),
    amount: number().min(1, { message: "Amount must be a positive number" }),
    startedDate: z.date(),
    endDate: z.date(),
    images: z.array(z.instanceof(File)).optional().nullable()
});



export const sendDirectOffer = object({
    offerMessage: string().min(1, { message: "Offer Message is required" }),
    offerAmount: number().min(1, { message: "Amount must be a positive number" }),
    categoryId: string().min(1, { message: "Category is required" }),
    date: z.date({ message:"date is required" }),
    selectLocation: string().min(1, { message: "Location is required" }),
});