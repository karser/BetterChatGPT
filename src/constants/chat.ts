import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-4.1-mini',
  'gpt-4o-mini',
  'gpt-4o',
  'o1-mini',
  'o1',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo-0125',
];

export const defaultModel = 'gpt-4.1-mini';

export const modelMaxToken = {
  'gpt-4.1-mini': 128000,
  'gpt-4o-mini': 128000,
  'gpt-4o': 128000,
  'o1-mini': 128000,
  'o1': 200000,
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-3.5-turbo-1106': 16384,
  'gpt-3.5-turbo-0125': 16384,
};

export const modelCost = {
  'gpt-4o': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-4.1-mini': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-4o-mini': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'o1': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'o1-mini': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0301': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-3.5-turbo-1106': {
    prompt: { price: 0.001, unit: 1000 },
    completion: { price: 0.0015, unit: 1000 },
  },
  'gpt-3.5-turbo-0125': {
    prompt: { price: 0.0005, unit: 1000 },
    completion: { price: 0.0015, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
