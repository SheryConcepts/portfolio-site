export default function Page({
  params: { post },
  params,
}: {
  params: { post: string };
}) {
  console.log(params);
  return (
    <div className="max-w-screen-3xl min-h-screen rounded-t-3xl bg-p-12 px-4 pt-16 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-screen-md flex-col items-start justify-start gap-y-8">
        <h1 className="self-start text-xl text-p-3 sm:text-2xl lg:text-3xl">
          Title of the post
        </h1>
        <div className="flex max-w-screen-lg flex-col gap-y-4">
          <p className="text-md text-p-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            explicabo, minima magni consequuntur minus sint aliquam sunt quis
            dolorum. Possimus sequi rerum quo debitis repudiandae. Quisquam
            dolores voluptatem ex quibusdam!
          </p>
          <p className="text-md text-p-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            explicabo, minima magni consequuntur minus sint aliquam sunt quis
            dolorum. Possimus sequi rerum quo debitis repudiandae. Quisquam
            dolores voluptatem ex quibusdam!
          </p>
          <p className="text-md text-p-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            explicabo, minima magni consequuntur minus sint aliquam sunt quis
            dolorum. Possimus sequi rerum quo debitis repudiandae. Quisquam
            dolores voluptatem ex quibusdam!
          </p>
          <p className="text-md text-p-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            explicabo, minima magni consequuntur minus sint aliquam sunt quis
            dolorum. Possimus sequi rerum quo debitis repudiandae. Quisquam
            dolores voluptatem ex quibusdam!
          </p>
        </div>
      </div>
    </div>
  );
}
