import { RxCross2 } from 'react-icons/rx';

type TagsInputProps = {
  className?: string;
  tags: string[];
  onRemoveTag: (tag: string) => void;
};

const TagsInput = (props: TagsInputProps) => {
  const { tags, onRemoveTag } = props;
  return (
    <div className='flex items-center flex-wrap justify-start gap-1'>
      {tags.map((tag, index) => (
        <div
          className='inline-flex bg-black text-white px-2 gap-1 rounded-md items-center'
          key={index}
        >
          <span>
            <RxCross2 onClick={() => onRemoveTag(tag)} />
          </span>
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsInput;
