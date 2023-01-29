import { jwtVerify, type JWTPayload } from 'jose';

export const verify = async (
  token: string,
  secret: string
): Promise<JWTPayload | false> => {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );

    return payload;
  } catch (error) {
    return false;
  }
};
