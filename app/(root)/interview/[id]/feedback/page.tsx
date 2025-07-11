import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { X } from "lucide-react";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
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
    <section className="section-feedback">
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-light-600 hover:text-destructive-100 hover:border-destructive-100 transition-colors"
          asChild
        >
          <Link href="/">
            <X className="w-4 h-4" />
            Close
          </Link>
        </Button>
      </div>

      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold text-primary">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p className="text-neutral-700 dark:text-neutral-200">
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p className="text-neutral-700 dark:text-neutral-200">
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p className="text-neutral-700 dark:text-neutral-200">{feedback?.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2 className="text-primary">Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold text-neutral-800 dark:text-neutral-100">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p className="text-neutral-700 dark:text-neutral-200">{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-primary">Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index} className="text-neutral-700 dark:text-neutral-200">{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-primary">Areas for Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index} className="text-neutral-700 dark:text-neutral-200">{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;