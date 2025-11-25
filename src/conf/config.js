const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDBId: String(import.meta.env.VITE_DATEBASE - ID),
  appwriteUrlCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwriteUrlBucketId: String(import.meta.env.VITE_BUCKET - ID),
};

export default conf;
