import { useState } from "react";
import { ICommentProps } from "../../interface/propsComponents";
import * as S from "./style";
import { UserIcon } from "../iconUser";

const ListCardComment = ({ title, listComments }: ICommentProps) => {
  return (
    <S.ListCommentsStyle>
      <h2>{title}</h2>
      <ul>
        {listComments?.map((comment, index) => (
          <S.LiCard>
            <UserIcon name={comment.user_name} />
            <p>{comment.comment}</p>
          </S.LiCard>
        ))}
      </ul>
    </S.ListCommentsStyle>
  );
};

export default ListCardComment;
