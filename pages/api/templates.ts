import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Router } from "next/router";

import { data } from "../../data/dummydata";
let dummydata = data;
type templateData = {
  category: string[];
  createdAt: string;
  description: string;
  link: string;
  name: string;
  error: any;
};
const API_ENDPOINT =
  "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

const corsanywhere = "https://cors-anywhere.herokuapp.com";
let cache = {};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<templateData>
) {
  try {
    // const { data } = await axios.get(API_ENDPOINT);
    const {
      query: { name, sort, category, page = 1, limit = 5 },
    } = req;
    const cacheKey = `${name}-${sort}-${category}-${page}-${limit}`;
    if (cache[cacheKey]) {
      res.json(cache[cacheKey]);
      return;
    }
    if (isNaN(page) || isNaN(limit)) {
      res.status(400).json({ error: "Invalid page or limit parameter" });
      return;
    }
    let filteredData = dummydata;
    if (name) {
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (sort === "date") {
      filteredData = filteredData.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
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

    cache[cacheKey] = {
      data: paginatedData,
      total: filteredData.length,
      currentPage: page,
      limit: limit,
      totalPages: totalPages,
    };

    res.setHeader("Cache-Control", "max-age=3600");
    res.json({
      data: paginatedData,
      total: filteredData.length,
      currentPage: page,
      limit: limit,
      totalPages: totalPages,
    });
    //   res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
