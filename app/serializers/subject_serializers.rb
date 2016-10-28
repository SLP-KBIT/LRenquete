class SubjectSerializer < ActiveModel::Serializer
  attributes :run_time, :subject_id, :teacher, :group, :result, :advance_results

  def result
    object.result.split(',').map(&:to_i)
  end

  def advance_results
    object.result.split(',').map(&:to_i)
  end
end
