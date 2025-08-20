"use server"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId,getLatestInterviews } from "@/lib/actions/general.action";


export default async function Home() {

  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id),
    getLatestInterviews({ userId: user?.id }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = allInterview?.length > 0;



  return (
    <>
      <section className="card-cta flex flex-row gap-10" >
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">Practice real interview questions & get instant feedback.</p>
          <Button className='btn-primary max-sm:w-full' >
            <Link href={'/interview'}>Start an Interview</Link>
          </Button>
        </div>
        <div>
          <Image src={'/robot.png'} alt="robot" height={400} width={400} className="max-sm:hidden" />
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {
            hasPastInterviews ?(
              userInterviews?.map((interview)=>(
                <InterviewCard key={interview.id} {...interview} />
              ))
            ):(
              <p>You haven't taken any interviews.</p>
            )
          }
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
        <div className="interviews-section">
          {
            hasUpcomingInterviews ?(
              latestIN?.map((interview)=>(
                <InterviewCard key={interview.id} {...interview} />
              ))
            ):(
              <p>There are no interviews available</p>
            )
          }
        </div>
      </section>
    </>
  );
}
