export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const DaV = new DataView(buffer);

  if (position >= length) throw new Error('Position outside range');
  // set new value in the desired position
  DaV.setInt8(position, value);

  return DaV;
}
