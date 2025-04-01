# Cursor Rules - Frontend V1

## 🎯 Princípios Base (@Codebase)
- Alterações minimalistas
- Código limpo e direto
- Foco na demanda específica
- Evitar over-engineering
- Reutilizar funcionalidades existentes
- Manter padrões visuais do projeto
- Priorizar soluções simples
- NUNCA alterar padrões de UI/UX existentes
- NUNCA criar novos padrões visuais
- NUNCA modificar componentes visuais sem autorização

## 📦 Análise de Impacto
- Verificar dependências do arquivo alterado
- Analisar funções que chamam o código modificado
- Identificar componentes que usam a feature
- Validar cenários de uso da funcionalidade
- Garantir que alterações não quebrem funcionalidades existentes

## 🚫 O que Evitar
- Alterações em múltiplos arquivos
- Refatorações não relacionadas
- Melhorias fora do escopo
- Validações redundantes
- Mudanças que impactam outras funcionalidades
- Reimplementação de funcionalidades existentes
- Complexidade desnecessária em novas features
- Alterações nos padrões visuais existentes
- Criação de novos padrões de UI/UX
- Modificações no design sem aprovação

## 🔄 Fluxo de Trabalho
1. Identificar arquivo alvo
2. Analisar impactos da alteração
3. Verificar código existente que pode ser reutilizado
4. Fazer alteração mínima necessária
5. Manter padrões visuais existentes
6. Testar cenários impactados
7. Commit

## 📋 Checklist de PR
- [ ] Alteração atende demanda específica
- [ ] Código é minimalista
- [ ] Mantém padrões existentes
- [ ] Não adiciona complexidade desnecessária
- [ ] Impactos foram analisados e testados
- [ ] Reutiliza código existente quando possível
- [ ] NÃO altera padrões visuais existentes
- [ ] NÃO cria novos padrões de UI/UX
- [ ] NÃO modifica design sem aprovação

## 🔍 Padrões de Código (@Code)
```typescript
// Hooks customizados
const [state, setState] = useState<Type>(); // Tipagem explícita
const callback = useCallback(() => {}, [deps]); // Memoização quando necessário

// Validações
if (!condition) {
  notification("Mensagem clara", "error");
  return;
}

// Components
export const Component = () => {
  // Props e estados no topo
  // Hooks em seguida
  // Callbacks depois
  // Render por último
};
```

## ✅ Regras de Validação
1. Validar apenas o necessário
2. Mensagens em português
3. Retorno imediato após erro
4. Usar notification service padrão

## 📝 Commits (@Git)
- Mensagens curtas e diretas
- Prefixos: feat, fix, refactor
- Uma alteração por commit

## 🚫 O que Evitar
- Alterações em múltiplos arquivos
- Refatorações não relacionadas
- Melhorias fora do escopo
- Validações redundantes
- Mudanças que impactam outras funcionalidades
- Reimplementação de funcionalidades existentes
- Complexidade desnecessária em novas features
- Alterações nos padrões visuais existentes
- Criação de novos padrões de UI/UX
- Modificações no design sem aprovação

## 🔄 Fluxo de Trabalho
1. Identificar arquivo alvo
2. Analisar impactos da alteração
3. Verificar código existente que pode ser reutilizado
4. Fazer alteração mínima necessária
5. Testar cenários impactados
6. Commit

## 📋 Checklist de PR
- [ ] Alteração atende demanda específica
- [ ] Código é minimalista
- [ ] Mantém padrões existentes
- [ ] Não adiciona complexidade desnecessária
- [ ] Impactos foram analisados e testados
- [ ] Reutiliza código existente quando possível 