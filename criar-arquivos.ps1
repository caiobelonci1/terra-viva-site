# Script para criar todos os arquivos do projeto Terra Viva

$basePath = "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site\src"

Write-Host "Criando arquivos do projeto Terra Viva..." -ForegroundColor Green

# Criar types/index.ts
$typesContent = @'
// Tipos do projeto
export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'completed' | 'ongoing';
  year?: string;
  description: string;
  image: string;
  featured?: boolean;
  features?: string[];
  lotSize?: string;
  lotsCount?: number;
}

export interface Company {
  name: string;
  description: string;
  features: string[];
  yearsActive: string;
  projects?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Stats {
  value: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
'@

Set-Content -Path "$basePath\types\index.ts" -Value $typesContent
Write-Host "✓ types/index.ts criado" -ForegroundColor Cyan

Write-Host "`nArquivos básicos criados! Execute o script completo para criar todos os componentes." -ForegroundColor Yellow
Write-Host "`nPróximo passo: Vou criar os componentes um por um via VS Code." -ForegroundColor Green
