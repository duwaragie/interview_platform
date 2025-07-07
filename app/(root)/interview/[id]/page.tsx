import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    userId: user?.id!,
  });

  return (
    <>
      <div className="light-teal-gradient rounded-lg p-0.5">
        <div className="bg-background rounded-lg p-6">
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-row gap-4 items-center max-sm:flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image
                  src={getRandomInterviewCover()}
                  alt="cover-image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover size-[40px]"
                />
                <h3 className="capitalize text-primary" >{interview.role} Interview</h3>
              </div>

              <DisplayTechIcons techStack={interview.techstack} />
            </div>

            <p className="bg-surface dark:bg-transparent dark:text-white px-4 py-2 rounded-lg h-fit border border-border">
              {interview.type}
            </p>
          </div>
        </div>
      </div>

      <Agent
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        userName={user?.name!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />
    </>
  );
};

export default InterviewDetails;