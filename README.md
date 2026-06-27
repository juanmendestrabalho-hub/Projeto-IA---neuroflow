# Projeto-IA---neuroflow




##  Rodar o projeto

### 1. Instalar dependências
npm install

### 2. Criar banco
npx prisma migrate dev --name init

### 3. Rodar projeto
npm run dev

### 4. Acessar
http://localhost:3000






#COMO TESTAR
Crie um flow:
Nome: Teste
Trigger: error
Action: notify

Execute:
curl -X POST http://localhost:3000/api/events \
-H "Content-Type: application/json" \
-d '{"event":"error server down"}



Veja no dashboard → Logs
