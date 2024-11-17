import { JobPost } from "../schema/Job";
import { CiLocationOn } from "react-icons/ci";
import { BsTags } from "react-icons/bs";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { cn } from "@/util/cn";
import Spinner from "./Spinner";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type JobCardProps = {
  jobPost: JobPost;
  showFullDescription?: boolean;
};

const JobCard = ({ jobPost, showFullDescription = false }: JobCardProps) => {
  let description = jobPost?.description;
  if (!showFullDescription) {
    description = description.substring(0, 150) + "...";
  }

  if (!jobPost)
    return (
      <div>
        <Spinner loading={false} />
      </div>
    );
  return (
    <Card className="shadow-2xl px-2 md:px-2 border">
      <CardHeader className="flex flex-row items">
        <div className="w-full md:w-[60%]">
          <h3 className="text-xl font-bold">{jobPost?.title}</h3>
          <Badge className="bg-secondary text-secondary-foreground">
            {jobPost?.salary}
          </Badge>
        </div>
        <div className="md:w-[40%]">
          <div className="flex items-start text-gray-500 text-sm">
            <span>
              <CiLocationOn className="size-4" />
            </span>
            <span>{jobPost?.location}</span>
          </div>
        </div>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent className="">
        <Markdown
          skipHtml={false}
          className="prose prose-sm prose-headings:text-lg prose-headings:font-medium text-muted-foreground"
        >
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex-col border-t-1 border-t-zinc-200 z-10">
        <span className="flex items-start w-full text-base mb-4">
          <BsTags className="mr-2" />
          <span>{jobPost.tags.join(" | ")}</span>
        </span>
        <div className="flex flex-row items-center justify-between w-full">
          {!showFullDescription && (
            <Link
              to={`/jobs/${jobPost.id}`}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-4 py-2"
            >
              Read More
            </Link>
          )}
          <Button
            className={cn(
              showFullDescription
                ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-foreground border-none"
                : ""
            )}
          >
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
