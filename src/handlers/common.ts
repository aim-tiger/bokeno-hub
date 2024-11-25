import { pbkdf2Sync, randomBytes } from 'crypto';
import { v4 as uuidv4 } from 'uuid'

export const resErr = (error: string, status = 500) => {
  return {
    ok: false,
    error,
    status
  };
};

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const gSecret = (length: number): string => {
  const bytes = randomBytes(length);
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = bytes[i] % characters.length;
    result += characters[index];
  }
  return result;
};

const encryptPassword = (passwd: string): string => {
  const salt = randomBytes(16).toString('base64')
  const genHash = pbkdf2Sync(passwd, salt, 10000, 64, 'sha512')
  return `${genHash.toString('base64')}:${salt}`
}

const validatePassword = (storedPasswd: string, passwd: string): boolean => {
  const [token, salt] = storedPasswd.split(':')
  const hashedPasswd = pbkdf2Sync(passwd, salt, 10000, 64, 'sha512').toString('base64')
  return token === hashedPasswd
}

const generateTransactionId = (): string => {
  return uuidv4()
}

export { encryptPassword, validatePassword, generateTransactionId }
