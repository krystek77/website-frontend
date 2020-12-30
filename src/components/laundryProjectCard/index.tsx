import React from 'react';
import Washer from '../../images/washer.svg';
import Dryer from '../../images/dryer.svg';
import Ironer from '../../images/ironer.svg';
import {
  Container,
  Inner,
  Title,
  Requirments,
  Solutions,
} from './styles/laundryProjectCard';
import { FaBed, FaClock } from 'react-icons/fa';
import { GiSleevelessJacket } from 'react-icons/gi';
interface ILaundryProjectCard {
  Title: React.FC<{ title: string }>;
  Requirments: React.FC<{
    project: { needs: { id: number; value: string; name: string }[] };
  }>;
  Solutions: React.FC<{
    project: {
      washers: { id: number; value: string; name: string }[];
      dryers: { id: number; value: string; name: string }[];
      ironers: { id: number; value: string; name: string }[];
    };
  }>;
}

export const LaundryProjectCard: React.FC & ILaundryProjectCard = ({
  children,
}) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
LaundryProjectCard.Title = function LaundryProjectCardTitle({ title }) {
  return <Title>{title}</Title>;
};
LaundryProjectCard.Requirments = function LaundryProjectCardRequirments({
  project,
}) {
  return (
    <Requirments>
      {project.needs.map((item, index) => {
        return (
          <div key={`${item.id}_need`} className='need'>
            <div className='need-icon'>
              {index === 0 ? (
                <FaBed />
              ) : index === 1 ? (
                <FaClock />
              ) : (
                <GiSleevelessJacket />
              )}
            </div>
            <div className='parameter'>
              <div className='parameter-value'>{item.value}</div>
              <div className='parameter-name'>{item.name}</div>
            </div>
          </div>
        );
      })}
    </Requirments>
  );
};
LaundryProjectCard.Solutions = function LaundryProjectCardSolutions({
  project,
}) {
  return (
    <Solutions>
      <div className='solution'>
        <span className='solution-icon'>
          <img src={Washer} alt='Washers' />
        </span>
        <div className='parameters-wrapper'>
          {project.washers.map((item) => {
            return (
              <div className='parameter' key={`${item.id}_washers`}>
                <div className='parameter-value'>{`${item.value} szt.`}</div>
                <div className='parameter-name'>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='solution'>
        <span className='solution-icon dryer'>
          <img src={Dryer} alt='Dryers' />
        </span>
        <div className='parameters-wrapper'>
          {project.dryers.map((item) => {
            return (
              <div className='parameter' key={`${item.id}_dryers`}>
                <div className='parameter-value'>{`${item.value} szt.`}</div>
                <div className='parameter-name'>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='solution'>
        <span className='solution-icon ironer'>
          <img src={Ironer} alt='Ironers' />
        </span>
        <div className='parameters-wrapper'>
          {project.ironers.map((item) => {
            return (
              <div className='parameter' key={`${item.id}_ironers`}>
                <div className='parameter-value'>{`${item.value} szt.`}</div>
                <div className='parameter-name'>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Solutions>
  );
};

export default LaundryProjectCard;
