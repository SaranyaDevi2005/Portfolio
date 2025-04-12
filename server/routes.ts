import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the root directory
  app.use(express.static(path.join(process.cwd())));
  
  // API endpoint for resume download if needed
  app.get('/api/download-resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'SARANYA_DEVI_S_RESUME.pdf');
    res.download(resumePath, 'SARANYA_DEVI_S_RESUME.pdf');
  });
  
  // Catch-all route to serve index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
