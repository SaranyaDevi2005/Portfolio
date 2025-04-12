import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for resume download if needed
  app.get('/api/download-resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', '71762233042_SARANYA_DEVI_S_RESUME.pdf');
    res.download(resumePath, 'SARANYA_DEVI_S_RESUME.pdf');
  });

  const httpServer = createServer(app);

  return httpServer;
}
