# Aula 07 - Listas Avançadas e Estilização Responsiva

## 📋 Descrição

Projeto React Native (Expo) demonstrando conceitos avançados de listas e design responsivo.

## 🎯 Conceitos Aplicados

### 1. FlatList Avançado
- ✅ **Pull-to-Refresh**: Arraste para atualizar os dados
- ✅ **Infinite Scroll**: Carregamento automático ao rolar até o final
- ✅ **Paginação**: Load more com indicador de carregamento
- ✅ **Grid Layout**: Layout em grade com múltiplas colunas
- ✅ **Performance**: Otimizações com `removeClippedSubviews`, `maxToRenderPerBatch`, etc
- ✅ **Empty State**: Componente exibido quando não há dados
- ✅ **Separadores**: Separadores entre itens
- ✅ **Footer**: Componente de rodapé com loading

### 2. SectionList
- ✅ **Dados Agrupados**: Lista organizada por categorias
- ✅ **Section Headers**: Cabeçalhos de seção fixos (sticky)
- ✅ **Section Footer**: Rodapé para cada seção
- ✅ **Expansão/Colapso**: Seções que podem ser expandidas/colapsadas
- ✅ **Estilização Diferenciada**: Cada seção com cores e estilos únicos

### 3. Design Responsivo
- ✅ **Dimensions API**: Detecção de tamanho de tela
- ✅ **Breakpoints**: Pequeno, Médio e Grande (Tablet)
- ✅ **Orientação**: Detecção de retrato/paisagem
- ✅ **Grid Responsivo**: Layout que se adapta ao tamanho da tela
- ✅ **Espaçamento Dinâmico**: Padding/margin que se ajustam
- ✅ **Platform Detection**: Detecção de iOS/Android/Web
- ✅ **Listener de Dimensões**: Atualização em tempo real ao rotacionar

## 📱 Telas

### 1. Produtos (FlatList)
- Catálogo de produtos em grid
- Pull-to-refresh para atualizar
- Scroll infinito para carregar mais
- 2 colunas em celular, 3 em tablet

### 2. Categorias (SectionList)
- Supermercado com produtos por categoria
- Seções expansíveis/colapsáveis
- Headers fixos ao rolar
- Contador de itens por seção

### 3. Responsivo
- Demonstração de layout responsivo
- Informações do dispositivo em tempo real
- Grid que se adapta ao tamanho
- Breakpoints visuais

## 🚀 Como Executar

```bash
# Navegar para o diretório
cd Aula07

# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Ou com túnel
npx expo start --tunnel
```

## 📦 Dependências Principais

- `expo` - Framework principal
- `react-native` - Core do React Native
- `@react-navigation/native` - Navegação
- `@react-navigation/bottom-tabs` - Abas inferiores

## 🎨 Recursos de UI

### FlatList Features
- **RefreshControl**: Componente de pull-to-refresh
- **onEndReached**: Callback para paginação
- **ListFooterComponent**: Loading indicator
- **ListEmptyComponent**: Estado vazio
- **numColumns**: Grid layout

### SectionList Features
- **sections**: Array de seções com dados
- **renderSectionHeader**: Renderiza cabeçalho
- **renderSectionFooter**: Renderiza rodapé
- **stickySectionHeadersEnabled**: Headers fixos

### Responsive Features
- **Dimensions.get('window')**: Obter dimensões
- **Dimensions.addEventListener**: Escutar mudanças
- **Platform.OS**: Detectar sistema operacional
- **Breakpoints**: < 375px, 375-768px, >= 768px

## 💡 Dicas de Performance

1. **FlatList Otimizações**:
   - Use `keyExtractor` único
   - Configure `removeClippedSubviews={true}`
   - Ajuste `maxToRenderPerBatch` e `windowSize`
   - Use `getItemLayout` se itens têm altura fixa

2. **Imagens**:
   - Use `resizeMode` apropriado
   - Considere lazy loading
   - Cache de imagens

3. **Memoização**:
   - Use `React.memo` para componentes de item
   - `useCallback` para funções passadas como props

## 🎓 Conceitos Aprendidos

- Listas performáticas em React Native
- Pull-to-refresh e infinite scroll
- Listas agrupadas por seções
- Design responsivo e breakpoints
- Otimizações de performance
- Navegação por abas
- Estados de loading e vazio

## 📝 Notas

- As imagens são carregadas de `picsum.photos` (placeholder)
- Os dados são gerados dinamicamente
- Suporta iOS, Android e Web
- Layout totalmente responsivo
