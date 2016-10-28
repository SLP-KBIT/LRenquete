class Api::SubjectsController < ApiController
  before_action :get_run_time, only: :create
  before_action :get_teacher, only: :create
  before_action :get_student, only: :create
  before_action :get_result, only: :create
  before_action :get_advance_result, only: :create
  before_action :get_group, only: :create

  def create
    subject = Subject.new(subject_id: params[:subject_id],
                          run_time: @run_time,
                          teacher: @teacher,
                          group: @group,
                          student: @student,
                          results: @results,
                          advance_results: @advance_results)
    subject.save

    render json: subject
  end

  private

  def get_run_time
    raise '実行時間が入力されていません' if params[:run_time].nil?
    @run_time = params[:run_time]
  end

  def get_teacher
    raise '審判が指定されていません' if params[:teacher].nil?
    @teacher = params[:teacher] unless params[:teacher].nil?
  end

  def get_group
    raise '班が指定されていません' if params[:group].nil?
    @group = params[:group] unless params[:group].nil?
  end

  def get_student
    raise '学生が指定されていません' if params[:student].nil?
    @student = params[:student] unless params[:student].nil?
  end

  def get_result
    raise '結果が入力されていません' if params[:results].empty?
    @results = params[:results].join(',') unless params[:results].nil?
  end

  def get_advance_result
    raise '結果が入力されていません' if params[:advance_results].nil?
    @advance_results = params[:advance_results].join(',') unless params[:advance_results].nil?
  end
end
