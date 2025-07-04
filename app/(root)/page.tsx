import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";

import {
  getCurrentUser,
  getInterviewsByUserId, getLatestInterviews
} from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={500}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {/* {userInterviews && userInterviews.length > 0 ? (
            userInterviews.map((interview) => (
              <InterviewCard {...interview} userId={user?.id} key={interview.id}/>
            ))
          ) : (
            <p>You haven&apos;t created any interviews yet. Generate one below!</p>
          )} */}
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>
              You haven&apos;t created any interviews yet. Generate one below!
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {/* {availableInterviews.slice(0, 6).map((interview) => (
            <InterviewCard {...interview} userId={user?.id} key={interview.id}/>
          ))} */}
          {hasUpcomingInterviews
            ? latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id} />
              ))
            : "No upcoming interviews available."}          
        </div>
      </section>
    </>
  );
};

export default page;
