import { Canvas } from "./_components/canvas";

interface BoardIdProps {
  params: {
    boardId: string;
  };
}
const BoardIdPage = ({ params }: BoardIdProps) => {
  return <Canvas boardId={params.boardId}/>;
};

export default BoardIdPage;
