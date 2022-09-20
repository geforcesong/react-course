type Prop = {
  userId?: number;
  userName?: string;
};

function assertUserId(props: Prop): asserts props is Prop & {
  userId: number;
  userName: string;
} {
  if (!props.userId) {
    throw new Error('user is not existed');
  }
}

const FormTestPage: React.FC<Prop> = (props) => {
  assertUserId(props);
  console.log(props!.userName || '');

  return <div>{props!.userId.toString()}</div>;
};
export default FormTestPage;
