//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import axios from "axios";
import { Router } from "next/router";
import Cors from "cors";
import { data } from "../../data/dummydata";
// let dummydata = data;
type templateData = {
  category: string[];
  createdAt: string;
  description: string;
  link: string;
  name: string;
  error: any;
};

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});
const API_ENDPOINT =
  "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

const corsanywhere = "https://cors-anywhere.herokuapp.com";
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// let cache = {};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<templateData>
) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    // const { data } = await axios.get(API_ENDPOINT);
    // console.log(data);

    const {
      query: { name, sort, category, page = 1, limit = 6 },
    } = req;
    // console.log(name, sort, category);

    // const cacheKey = `${name}-${sort}-${category}-${page}-${limit}`;
    // if (cache[cacheKey]) {
    //   res.json(cache[cacheKey]);
    //   return;
    // }
    if (isNaN(page) || isNaN(limit)) {
      res.status(400).json({ error: "Invalid page or limit parameter" });
      return;
    }
    let filteredData = data;
    if (name) {
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(filteredData);
    }
    if (sort === "date") {
      filteredData = filteredData.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );
    }
    if (sort === sort) {
      filteredData = filteredData.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );
    }
    if (sort === "new") {
      filteredData = filteredData.sort(
        (a, b) => new Date(a.created) - new Date(b.created)
      );
    }
    if (category) {
      filteredData = filteredData.filter((item) =>
        item.category.includes(category)
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredData.length / limit);

    // cache[cacheKey] = {
    //   data: paginatedData,
    //   total: filteredData.length,
    //   currentPage: parseInt(page),
    //   limit: limit,
    //   totalPages: totalPages,
    // };

    // res.setHeader("Cache-Control", "max-age=3600");
    res.json({
      data: paginatedData,
      total: filteredData.length,
      currentPage: parseInt(page),
      limit: limit,
      totalPages: totalPages,
    });
    //   res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
