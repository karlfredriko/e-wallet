export const RenderOpt = ({ total, startVal, context }) => {
  const options = Array.from({ length: total }, (_, i) => {
    const optVal = String(startVal + i).padStart(2, "0");
    return <option key={context + i}>{optVal}</option>;
  });
  return <>{options}</>;
};
