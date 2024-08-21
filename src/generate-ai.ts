import dotenv from "dotenv";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { Milvus } from "@langchain/community/vectorstores/milvus";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "langchain/document";

dotenv.config();

const storeIntoMilvus = async (
  docs: Document[],
  collectionName: string,
) => {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 10,
  });
  const splits = await textSplitter.splitDocuments(docs);
  const vectorStore = await Milvus.fromDocuments(
    splits,
    new OpenAIEmbeddings(),
    { collectionName },
  );

  return vectorStore;
};

// const getVectorStore = async (collectionName: string) => {
//   return await Milvus.fromExistingCollection(new OpenAIEmbeddings(), {
//     collectionName,
//   });
// };

const fromTextFiles = async (dirPath: string) => {
  const loader = new DirectoryLoader(dirPath, {
    ".txt": (path) => new TextLoader(path),
  });
  return await loader.load();
};


async function generate() {
  const loadedDoc = await fromTextFiles("./content/");
  await storeIntoMilvus(loadedDoc, "book");

  console.log("Book vector data generated");
}

generate().catch(console.error);
