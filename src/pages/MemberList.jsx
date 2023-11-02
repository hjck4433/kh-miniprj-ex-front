import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");

  console.log(isLogin);
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    const memberList = async () => {
      try {
        const rsp = await AxiosApi.memberGet("ALL"); //전체 조회
        if (rsp.status === 200) setMemberList(rsp.data);
        console.log(rsp.data);
      } catch (e) {
        console.log(e);
      }
    };
    memberList();
  }, []);

  // 파트너 전체 리스트에서 파트너 상세 정보 넘어갈때 활용!!!
  const onClickMember = (id) => {
    console.log("onClick member : " + id);
    navigate(`/memberInfo/${id}`);
  };

  return (
    <Container>
      {memberList &&
        memberList.map((member) => (
          <MemberInfoWrapper
            key={member.id}
            onClick={() => onClickMember(member.id)}
          >
            <MemberId>ID: {member.id}</MemberId>
            <MemberName>이름: {member.name}</MemberName>
            <MemberEmail>이메일: {member.email}</MemberEmail>
            <MemberJoinDate>가입일: {member.join}</MemberJoinDate>
          </MemberInfoWrapper>
        ))}
    </Container>
  );
};
export default MemberList;
