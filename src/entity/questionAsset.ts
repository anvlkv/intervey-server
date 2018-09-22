import { Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { AssetBase } from './assetBase';
import { Question } from './question/entity';


@Entity()
export class QuestionAsset extends AssetBase {
    @ManyToOne(type => Question, question => question.questionAssets)
    @JoinColumn()
    question: Question;
    @RelationId((question: QuestionAsset) => question.question)
    questionId?: number[];
}

